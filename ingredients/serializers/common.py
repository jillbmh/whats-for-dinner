from rest_framework import serializers
from ..models import Ingredient


#This serializes the data, including adding the food group serialization.
class IngredientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = '__all__'
