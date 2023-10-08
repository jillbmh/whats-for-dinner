from django.urls import path
from .views import FoodGroupListView, FoodGroupDetailView

urlpatterns = [
    path('', FoodGroupListView.as_view()),
    path('<int:pk>/', FoodGroupDetailView.as_view()),
]