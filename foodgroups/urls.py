from django.urls import path
from .views import FoodGroupListView

urlpatterns = [
    path('', FoodGroupListView.as_view()),
]