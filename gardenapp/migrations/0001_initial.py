# Generated by Django 4.0.1 on 2022-01-25 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Zone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=400)),
                ('zdescription', models.CharField(max_length=400)),
                ('vintro', models.CharField(max_length=400)),
            ],
        ),
        migrations.CreateModel(
            name='Vegetable',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=250)),
                ('vdescription', models.CharField(max_length=400)),
                ('sunlight', models.CharField(max_length=400)),
                ('care', models.CharField(max_length=400)),
                ('image', models.CharField(max_length=400)),
                ('tips', models.CharField(max_length=400)),
                ('zone', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='vegetables', to='gardenapp.zone')),
            ],
        ),
    ]
