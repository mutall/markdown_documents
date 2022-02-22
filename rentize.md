

# RENTIZE

## Summary

* The rentize system has two main users, the **landlord** and the **tenant**. It allows for management of
    mutall enterprise.

    | User     | Long-term Objectives                                                                                                                                                                                           |
    | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | tenant   | 1. They should be able to view the monthly invoices (payments), and the reports `should be accurate` . 2. The client must be able to interrogate the system and view the historical statement of their account. |
    | landlord | -[ ] KRA Tax Compliance. Using the accounting program, the landlord's tax complaince to KRA should become easier                                                                                               |

## Immediate Objectives

* Upgrade mutall_rental to rentize, i.e., have the accounting bit in mutall_rental separated to
  * rentize.
  * accounting module.
* `Other Objectives`.  
  * Change the database according to the specifications.
  * [ ] Remove the accounting table. `It is part of the Accounting model` ,
  * [ ] Change the `client` entity/table to `tenant` .

## Immediate Assignments

01. `Report Familiarity`.To make your work easier,familiarize yourself with the reports.
    * [ ] You should be able to see an error and know where to go.
    * [ ] You should be able to generate the reports and supply them to the tenants.
     `Camilus and James`

02. [ ] `Code`. Migrate the code to the mutall_rental code to `digital_ocean` and resolve the references to the server.
 `Nyakundi`

03. `Bill`. Fix the Water readings and ebill on digital ocean.
    * [ ] Look at the water reading modules on mutall.co.ke. `Nyakundi`
    * [ ] Fix the ebill references once the modules are on Digital Ocean `Kaniu`
04. [ ] `Backup`. Create a backup system that include a local backup for all
                databases and the files. **The system should facilitate backups
                that go further than 5 months**.
     `Peter`

05. [ ] Have `mutall_rental` and `rentize` setup and running in your local machine.
`James` .

06. [ ] Learn how to do a markup with a Table of Contents `Sharon`.
07. [ ] `Training`. Train `James` on how to use the mutall_rental system.`Camillus`.  
08. [ ] Pursue KRA reporting (Accounting Module).`Camillus`

09. [ ] `Errors`. Have a look at the errors generated from the movement of the
                water bill system to **digital_ocean**.
    `Mr.Muraya` .

10. [ ] `Database Migration` . Conceive and integrate a migration module into the
        time table.
    `Mr.Muraya` .

## Long-term Assignment

01. [ ] `Restructuring code`. After the reference to the server are resolved, restructure the code to have rentize as part of the library
 under, `rentize/v/code` . `guided by Mr.Muraya` using the

 `MIGRATION MODULE`

    - Transfer of data between databases and transfer of databases.
 `ACCOUNTING MODULE`

     - This module will enable the management of financial records.
    
        - [ ] Refresh on the basics of Accounting.

## Completed Assignments

* [x] `Database Migration`.load mutall_rental from the server `mutall.co.ke` to digitial ocean `206.189.207.206`.
`James and Peter` .
* [x] `Database`. Rearrange the mutall_rental system to have a view similar to the mutall_rentize to view the similar
  entities and associate them.
