from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length= 30)
    image= models.URLField()
    foodgroup= models.ForeignKey(
        'foodgroups.FoodGroup',
        related_name='ingredients_in_foodgroup',
        blank=False,
        null=True,
        on_delete=models.SET_NULL,
    )
    user = models.ForeignKey(
        'users.User',
        related_name='ingredients',
        on_delete=models.SET_NULL,
        null=True
    )
    
    def __str__(self):
        return f"{self.name}"