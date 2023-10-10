from rest_framework import serializers
from ..models import FoodGroup



# This serializes the food group data
class FoodGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodGroup
        fields = '__all__'
