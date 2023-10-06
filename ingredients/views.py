from django.shortcuts import render
from django.db.models import Q
from .models import Ingredient
from .serializers.common import IngredientSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import (
    RetrieveUpdateDestroyAPIView, 
    UpdateAPIView, 
    GenericAPIView
)
from lib.permissions import IsOwnerOrReadOnly
from lib.views import UserListCreateAPIView
from rest_framework.response import Response


#set all ingredients
class IngredientView(GenericAPIView):
    queryset=Ingredient.objects.all()
    serializer_class=IngredientSerializer
    permission_classes= [IsAuthenticated]

#view all ingredients
class IngredientListView(IngredientView, UserListCreateAPIView):
    permission_classes = [IsAuthenticated]

#view by foodgroup
class IngredientListbyFoodGroup(GenericAPIView):
    serializer_class= IngredientSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        queryset = Ingredient.objects.all()
        foodgroup_ids = self.request.query.params.getlist('foodgroups')
        if foodgroup_ids:
            queryset = queryset.filter(Q(foodgroup__ids__in=foodgroup_ids))
        return queryset


# view single Ingredient
class SingleIngredientView(IngredientView, UserListCreateAPIView, RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
        





