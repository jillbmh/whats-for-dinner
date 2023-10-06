from .views import IngredientView, IngredientListbyFoodGroup, SingleIngredientView
from django.urls import path 

urlpatterns = [
    path('', IngredientView.as_view()),
    path('<int:pk>/', SingleIngredientView.as_view()),
    path('<str:foodgroup>/', IngredientListbyFoodGroup.as_view()),
]
