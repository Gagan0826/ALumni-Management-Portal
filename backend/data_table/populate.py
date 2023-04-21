
'''
these python code doesnt work just by running it
follow these steps to add or delete the data

populate:
1.select all the data 

import pandas as pd
from data_table.models import Alumni
import math
# Read data from Excel sheet
df = pd.read_excel('C:\\Users\\Hp\\Desktop\\Newp1\\importapp\\fad.xlsx')

# Clean data
#df = df.dropna() # Drop rows with null values

# Insert data into Django model
for index, row in df.iterrows():
    alumni = Alumni(
        sl_no=index,
        usn=row['USN'],
        name=row['Name'],
        batch = int(row['Batch']) if str(row['Batch']).isdigit() else 0,
        company=row['company'],
        address=row['address'],
        PROEmail=row['ProEmail'],
        OFFEmail=row['OffEmain'],
        contact_no=int(row['contact_no']) if str(row['contact_no']).isdigit() else 0,
        designation=row['designation'],
        domain=row['domain'],
        willing_contribution=row['willing_contribution']
    )
    alumni.save()


2.deleting all the records:

from data_table.models import Alumni
Alumni.objects.all().delete()

'''
    
