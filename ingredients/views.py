from django.shortcuts import render
from .models import Ingredient
from .serializers.common import IngredientSerializer
from rest_framework.generics import GenericAPIView

# Create your views here.

class IngredientViewAll(GenericAPIView):
    queryset= Ingredient.objects.all()
    serializer_class= IngredientSerializer