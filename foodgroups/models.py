from django.db import models

# Create your models here.

#This creates a foodgroup table with the fields, name and ingredients
class FoodGroup(models.Model):
    name = models.CharField(max_length=100)
    NULL = True
    ingredients = models.ManyToManyField(
        'ingredients.Ingredient',
        related_name='foodgroup_ingredients',
        blank= False,
    )


    def __str__(self):
        return f"{self.name}"