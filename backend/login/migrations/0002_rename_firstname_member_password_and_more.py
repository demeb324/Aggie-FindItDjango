# Generated by Django 5.1.5 on 2025-02-10 21:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='firstname',
            new_name='password',
        ),
        migrations.RenameField(
            model_name='member',
            old_name='lastname',
            new_name='userName',
        ),
    ]
