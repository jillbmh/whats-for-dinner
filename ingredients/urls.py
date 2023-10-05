from .views import IngredientViewAll
from django.urls import path 

urlpatterns = [
    path('', IngredientViewAll.as_view())
]