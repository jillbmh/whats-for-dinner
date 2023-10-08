from .views import IngredientListView, SingleIngredientView
from django.urls import path 

urlpatterns = [
    path('', IngredientListView.as_view()),
    path('<int:pk>/', SingleIngredientView.as_view()),
]
