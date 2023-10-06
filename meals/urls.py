from django.urls import path
from .views import UsersMealsView, SingleMealDetailView

urlpatterns = [
    path('<int:pk>/', SingleMealDetailView.as_view()),
    path('', UsersMealsView.as_view()),
]
