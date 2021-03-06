# Generated by Django 4.0.1 on 2022-01-25 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gardenapp', '0003_alter_vegetable_description_alter_vegetable_tips_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vegetable',
            name='care',
            field=models.CharField(max_length=600),
        ),
        migrations.AlterField(
            model_name='vegetable',
            name='description',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='vegetable',
            name='sunlight',
            field=models.CharField(max_length=600),
        ),
        migrations.AlterField(
            model_name='vegetable',
            name='tips',
            field=models.CharField(max_length=800),
        ),
    ]
