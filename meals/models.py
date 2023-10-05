from django.db import models


# Create your models here.

class Meal(models.Model):
    ingredients = models.ManyToManyField(
        'ingredients.Ingredient',
        related_name='ingredients',  
        blank=False
    )
    user = models.ForeignKey(
        'users.User',
        related_name='user', 
        on_delete=models.CASCADE,
        null=True
    )

    def __str__(self):
        return f"{self.user}'s Meal"