from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from .models import Subgroup
from .serializers.common import SubgroupSerializer
from .serializers.populated import PopulatedSubgroupSerializer

# Create your views here.
class SubgroupListView(ListCreateAPIView):
    queryset = Subgroup.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return SubgroupSerializer
        return PopulatedSubgroupSerializer
    

# Individual subgroup
class SubgroupDetailView(RetrieveAPIView):
    queryset = Subgroup.objects.all()
    serializer_class = PopulatedSubgroupSerializer