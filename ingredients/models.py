from django.db import models

# This creates an ingredient table with a field of name, image, foodgroup, user. 
# Foreign key links the Ingredients table with the foodgroup and user tables using the PK ID no.
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
        return f"{self.name} -{self.foodgroup}"