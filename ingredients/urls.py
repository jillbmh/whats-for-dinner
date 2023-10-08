from .views import IngredientListView, SingleIngredientView, IngredientsByFoodGroupView
from django.urls import path 

urlpatterns = [
    path('', IngredientListView.as_view()),
    path('<int:pk>/', SingleIngredientView.as_view()),
    path('food-groups/<int:foodgroup_id>/ingredients/', IngredientsByFoodGroupView.as_view())
]
