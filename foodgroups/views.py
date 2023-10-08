from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from .models import FoodGroup
from .serializers.common import FoodGroupSerializer
from .serializers.populated import PopulatedFoodGroupSerializer
# Create your views here.


class FoodGroupListView(ListCreateAPIView):
    queryset = FoodGroup.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return FoodGroupSerializer
        return PopulatedFoodGroupSerializer
    
class FoodGroupDetailView(RetrieveAPIView):
    queryset = FoodGroup.objects.all()
    serializer_class = FoodGroupSerializer