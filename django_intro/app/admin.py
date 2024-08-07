from django.contrib import admin
from .models import Book, BookNumber, Character, Author

# Register your models here.
# admin.site.register(Book)
admin.site.register(BookNumber)
admin.site.register(Character)
admin.site.register(Author)


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    fields = ["title", "description", "price", "published", "cover", "number"]
    list_display = [
        "title",
        "description",
        "price",
    ]
    list_filter = ["published"]
    search_fields = ["title"]
