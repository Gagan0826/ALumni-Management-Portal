# Generated by Django 4.1.7 on 2023-04-01 17:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_table', '0002_remove_alumni_id_alumni_sl_no'),
    ]

    operations = [
        migrations.AlterField(
            model_name='alumni',
            name='sl_no',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
        ),
    ]