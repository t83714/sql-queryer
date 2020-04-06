# sql-queryer
A openfaas demo function

Usage:

```bash
curl --location --request POST 'http://localhost:8080/function/sql-queryer' \
--header 'Content-Type: text/plain' \
--data-raw 'SELECT COUNT(CRED_LIC_NUM) as lic_num, CRED_LIC_STATE
from CSV("https://data.gov.au/data/dataset/fa0b0d71-b8b8-4af8-bc59-0b000ce0d5e4/resource/35953a01-a9a8-4609-8566-c9fa7de465d3/download/credit_lic_202004.csv") 
GROUP BY CRED_LIC_STATE
limit 20
'
```

Output:
```
lic_num  CRED_LIC_STATE
-----------------------
1151     VIC           
1998     NSW           
55       TAS           
891      QLD           
228      SA            
621      WA            
13       NT            
39       ACT           
1                      
```
