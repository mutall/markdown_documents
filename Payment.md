# Payment module

This module is to help in easing the process of making payments.  

## Daraja API

Entails of:  
> |_C2B - API (Customer to Business)  
> |_B2B - API (Business to Business)  
> |_B2C - API (Business to Customer)  
> LIPA NA MPESA  
> REVERSAL  

### Payment module relation to Tracker

Tracker manages all the day to day activities. The payment module is to incorporate to aid in managing of our daily expenses. Tracker will help organize all transactions by simplifying the process of understanding all transactions.  

There are different methods of payments:  
 > M-pesa  
 > Paypal  
 > Credit card  
 > Cheque  
 > Cash/ Slip  

Effect the flow chart to automate the model  

- Designing the user interface.  
- Determine the flow.
- Analyzing the data to find if its enough.

#### C2B

This API allows clients / tenants to pay bills to a business  

#### B2B

Businesses use this API to make payments to another business.

#### B2C

Allows a business to make payments to customers or clients, workers i.e  can be used to pay salaries.

## STK Push Layout

                                  STK PUSH
                        _____________________________________
                           Business name: eg mutall  
                        Account number: Paybill / Till number
                               Amount: 2500
                            Please enter your pin:
    
                        _____________________________________  
                                       ok
    
                           1            2             3
    
                           4            5             6
    
                           7            8             9
    
                           *            0             #  

### `Supported languages in Daraja API`

- Java
- PHP  
- Ruby
- Python
- Nodejs

### ASSIGNMENTS

- [x] Set up a working example to do payment. (PK)
- [x] Add tea services to the service panel to carry out:(FN)
  - Tea delivery
  - Tea payment  

- [x] Design a tea delivery form.(SW)
- [x] Code the ok button for the form.(DK)
- [x] Design a tea payment form.(JN)
- [x] Code the ok button for the form.(PK)
- [x] Research on how to use paypal for payment.(DK)
- [x] Research on `JENGA API` for C2C payments.  