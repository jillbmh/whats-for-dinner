from rest_framework import serializers
from ..models import Subgroup
from subgroups.serializers.common import SubgroupSerializer
from ingredients.serializers.common import IngredientSerializer

class PopulatedSubgroupSerializer(serializers.ModelSerializer):
    ingredients = IngredientSerializer(many=True) 
    class Meta:
        model = Subgroup
        fields = '__all__'  
