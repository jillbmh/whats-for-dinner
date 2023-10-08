from django.urls import path
from .views import FoodGroupListView

urlpatterns = [
    path('<int:pk>/', FoodGroupListView.as_view()),
]