from django.urls import path
from .views import SubgroupListView, SubgroupDetailView

urlpatterns = [
    path('', SubgroupListView.as_view()),
    path('<int:pk>/', SubgroupDetailView.as_view()),
]