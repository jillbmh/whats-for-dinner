from django.db import models

# Create your models here.

class Subgroup(models.Model):
    name = models.CharField(max_length=255)
    foodgroup = models.ForeignKey(
        'foodgroups.Foodgroup',
        on_delete=models.CASCADE, 
        related_name='foodgroup_subgroups',  
        default = None,
    )
    ingredients = models.ManyToManyField(
        'ingredients.Ingredient',
        related_name='subgroup_ingredients',
    )

    def __str__(self):
        return f"{self.name}"