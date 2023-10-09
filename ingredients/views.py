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

#! Dont forget to change the authorisations back to 'isAuthenticated'

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





