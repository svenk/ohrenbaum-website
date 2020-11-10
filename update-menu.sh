#!/bin/bash
# Updates the navigation in all HTML files for Ohrenbaum. Yes. Amazing tech.

menufile=$(mktemp)

# use single quotes in the menufile, due to sed expression below
cat > $menufile <<MENU
    <li data-irony='1'><a href='ueber.html'>Hintergrund</a>
    <li data-irony='2'><a href='kindheit-und-jugend.html'>Geschichtliches</a>
    <li data-irony='2'><a href='beirat.html'>Beirat</a>
    <li data-irony='3'><a href='ausschreibungen.html'>Jobs</a>
    <li data-irony='3'><a href='presse.html'>Pressemitteilungen</a>
    <li data-irony='0'><a href='impressum.html'>Impressum</a>
    <li data-irony='0'><a href='impressum.html#datenschutz'>Datenschutz</a> 
MENU

for html in *.html; do
    start=$(grep -n "<nav><ul>" $html | cut -f1 -d:)
    end=$(grep -n "</ul></nav>" $html | cut -f1 -d:)
    
    if ! [[ $start =~ ^[0-9]+$ ]] && [[ $end =~ ^[0-9]+$ ]]; then
       echo "$html: Start and end lines of navigation not properly detected. (I found '$start' and '$end')"
       continue
    fi
    
    sponge=$(mktemp)
    cat >$sponge \
        <(head -n$(($start)) $html) \
        <(sed "s/href='$html'/href='ueber.html' class='active'/" $menufile) \
        <(tail -n+$(($end)) $html)
    cat <$sponge >$html
done
