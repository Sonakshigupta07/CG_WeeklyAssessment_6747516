import {test, request, expect} from "@playwright/test"
import data from "./data.json"

test("restful booker",async({request})=>{
    let authResponse = await request.post("https://restful-booker.herokuapp.com/auth",{
        data:{
            username: data.username,
            password: data.password
        }
    })
    let body = await authResponse.json()
    console.log(body);
    expect(authResponse.status()).toBe(200);
    let token = body.token;
    expect(body.token).toBeDefined();
    console.log("Token : ",token);
    expect(body).toHaveProperty("token");
    
    // CREATE BOOKING
    let createBooking = await request.post("https://restful-booker.herokuapp.com/booking",{
        data:data.booking
    })

    let createBody = await createBooking.json();
    let bookingId = createBody.bookingid;

    console.log("Booking ID:", bookingId);
    expect(createBooking.status()).toBe(200);
    expect(createBody.booking).toMatchObject(data.booking);

    // GetBooking By Id
    let getBooking = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`)

    let body3 = await getBooking.json()
    console.log("Booking Details:", body3);
    expect(body3.firstname).toEqual(data.booking.firstname);
   expect(getBooking.status()).toBe(200);

    // GetBooking
    let getBookingId = await request.get("https://restful-booker.herokuapp.com/booking")
    let body4 = await getBookingId.json()
    console.log(body4);
    expect(getBookingId.status()).toBe(200);
    expect(body4.length).toBeGreaterThan(0);
    expect(JSON.stringify(body4)).toContain(bookingId.toString());
    
    // UPDATE BOOKING
    let updateBooking = await request.put(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{
        headers:{
              Cookie : `token=${token}`
        },
       data:data.updateBooking
    })
    let body5 = await updateBooking.json()
    console.log(body5);
   expect(updateBooking.status()).toBe(200);

   // Partial Booking
   let partialBooking = await request.patch(`https://restful-booker.herokuapp.com/booking/${bookingId}`,{
    headers:{
        Cookie : `token=${token}`
    },
    data :data.partialUpdate
   })
   let body6 = await partialBooking.json()
   console.log(body6);
   expect(partialBooking.status()).toBe(200);
   expect(body6).toMatchObject(data.partialUpdate);
})