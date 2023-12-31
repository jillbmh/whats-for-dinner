from django.urls import path
from .views import UsersMealsView, SingleMealDetailView, MealCreateView, UpdateMealView

urlpatterns = [
    path('<int:pk>/', SingleMealDetailView.as_view()),
    path('', UsersMealsView.as_view()),
    path('create-meal/', MealCreateView.as_view()),
    path('update/<int:pk>/', UpdateMealView.as_view())
]
