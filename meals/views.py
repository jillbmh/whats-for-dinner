from django.shortcuts import render
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import GenericAPIView, RetrieveUpdateDestroyAPIView, UpdateAPIView
from .models import Meal
from .serializers.common import MealSerializer
from .serializers.populated import PopulatedMealSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from lib.permissions import IsOwnerOrReadOnly
from lib.views import UserListCreateAPIView


#set all
class MealView(GenericAPIView):
    queryset=Meal.objects.all()
    serializer_class=MealSerializer
    permission_classes = [IsAuthenticated]


#all of that users meals
class UsersMealsView(MealView, UserListCreateAPIView, RetrieveUpdateDestroyAPIView):
    serializer_class = PopulatedMealSerializer
    # permission_classes = [IsOwnerOrReadOnly]


    def get_queryset(self):
        user_id = self.request.user.id
        queryset = Meal.objects.filter(user_id=user_id)
        return queryset

#single meal 
class SingleMealDetailView(MealView, RetrieveUpdateDestroyAPIView):
    serializer_class = PopulatedMealSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Meal.objects.all()

# create meal
class MealCreateView(generics.CreateAPIView):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer


class UpdateMealView(MealView, UpdateAPIView):
    # permission_classes = [IsAuthenticated]
    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)