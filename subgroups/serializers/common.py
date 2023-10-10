from rest_framework import serializers
from ..models import Subgroup
from ingredients.serializers.common import IngredientSerializer

class SubgroupSerializer(serializers.ModelSerializer):
    subgroup_ingredients = IngredientSerializer(many=True)

    class Meta:
        model = Subgroup
        fields = '__all__'