from django.shortcuts import render
from .models import Ingredient
from .serializers.common import IngredientSerializer
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView, 
    UpdateAPIView, 
    GenericAPIView
)
from lib.permissions import IsOwnerOrReadOnly
from lib.views import UserListCreateAPIView


#set all ingredients
class IngredientView(GenericAPIView):
    queryset=Ingredient.objects.all()
    serializer_class=IngredientSerializer
    permission_classes= [IsAuthenticatedOrReadOnly]

#view all ingredients
class IngredientListView(IngredientView, UserListCreateAPIView):
    permission_classes = [IsAuthenticatedOrReadOnly]


# view single Ingredient
class SingleIngredientView(IngredientView, RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]


class IngredientsByFoodGroupView(ListAPIView):
    serializer_class = IngredientSerializer

    def get_queryset(self):
        foodgroup_id = self.kwargs['foodgroup_id']
        queryset = Ingredient.objects.filter(foodgroup_id=foodgroup_id)
        return queryset
        





