# Generated by Django 5.0.7 on 2024-07-19 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_book_cover_book_description_book_pricce_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='pricce',
        ),
        migrations.AddField(
            model_name='book',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]
