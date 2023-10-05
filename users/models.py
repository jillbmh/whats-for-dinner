from django.db import models

# Create your models here.

class User(models.Model):
    username = models.CharField(max_length=30)
    meal = models.ManyToManyField(
        'meals.Meal', 
        related_name='users', 
        blank=True
        )


    def __str__(self):
        return f"{self.username}"