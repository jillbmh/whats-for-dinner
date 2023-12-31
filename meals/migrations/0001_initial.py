# Generated by Django 4.2.5 on 2023-10-05 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('ingredients', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Meal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ingredients', models.ManyToManyField(blank=True, related_name='meals', to='ingredients.ingredient')),
            ],
        ),
    ]
