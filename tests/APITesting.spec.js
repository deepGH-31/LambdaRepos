const {test,expect} = require('@playwright/test') 

test('create a get request', async({ request})=>{

    const response = await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(await response.json())
} )

test.only('Create a Post request', async({request})=>{

    const postAPIResponse = await request.post('/booking',{
        data: {
            
                "firstname": "deep",
                "lastname": "pan",
                "totalprice": 1000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "super bowls"
            }
        
    })
     const apiResponseBody= postAPIResponse.json()
     console.log(apiResponseBody)

})