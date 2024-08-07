from django.urls import path, include
from . import views
from rest_framework import routers
from .views import BookViewSet

# from .views import Another
# path("/another", Another.as_view())
router = routers.DefaultRouter()
router.register("books", BookViewSet)
urlpatterns = [path("", views.first), path("rest", include(router.urls))]
