# Generated by Django 4.2.6 on 2023-10-16 05:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ingredients', '0009_alter_ingredient_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ingredient',
            name='user',
        ),
    ]
