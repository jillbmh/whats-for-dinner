from rest_framework import serializers
from ..models import FoodGroup


class FoodGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodGroup
        fields = '__all__'