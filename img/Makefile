%.webp: %.jpg
	cwebp -q 80 $^ -o $@

%.webp: %.png
	cwebp -q 80 $^ -o $@

#IMGS=$(patsubst %.png,%.webp,$(patsubst %.jpg,%.webp,$(wildcard *.jpg *.png)))
PNGS=$(patsubst %.png,%.webp,$(shell find . -name "*.png"))
JPGS=$(patsubst %.jpg,%.webp,$(shell find . -name "*.jpg"))
IMGS=$(PNGS) $(JPGS)

all: $(IMGS)
