all:
	for i in css en img js papers post project pt publication publication_types tags talk; do rm -vrf $$i; done
	cd ../; hugo
