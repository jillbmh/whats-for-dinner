from rest_framework import serializers
from ..models import Subgroup
from subgroups.serializers.common import SubgroupSerializer

class PopulatedSubgroupSerializer(serializers.ModelSerializer):
    subgroup = SubgroupSerializer(many=True) 
    class Meta:
        model = Subgroup
        fields = '__all__'  
