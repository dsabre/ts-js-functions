#!/bin/bash

while true; do
    # Prompt user for function name
    read -p "Enter function name: " fName

    # Check if the function name is not empty
    if [ -n "$fName" ]; then
        break  # Exit the loop if the function name is provided
    else
        echo "Function name cannot be empty. Please try again."
    fi
done

fPath="src/views/functions/${fName}.vue"

# Check if the file exists
if [ -e "$fPath" ]; then
    echo "Function $fPath already exists."
    exit 1
fi

# Prompt user for function description
read -p "Enter function description: " fDescription

# Prompt user for TypeScript code
read -p "Enter TypeScript code: " tsCode

# Prompt user for JavaScript code
read -p "Enter JavaScript code: " jsCode

# Prompt user for example code
read -p "Enter example code: " exampleCode

# create function file
pnpm gen-func --name="$fName" || exit $?

# replace function infos in page
sed -i "s/DESCRIPTION/$fDescription/g" "$fPath"
sed -i "s/TYPESCRIPT_CODE/$tsCode/g" "$fPath"
sed -i "s/JAVASCRIPT_CODE/$jsCode/g" "$fPath"
sed -i "s/EXAMPLE_CODE/$exampleCode/g" "$fPath"

# add route for this function
sed -i "s/\/\/ NEW ROUTES ABOVE THIS LINE (DO NOT REMOVE THIS COMMENT)/addRoute('${fName}');\n\/\/ NEW ROUTES ABOVE THIS LINE (DO NOT REMOVE THIS COMMENT)/g" "src/router/index.js"

# format file
pnpm exec prettier "$fPath" --write

# add file to git
git add "$fPath"
git commit -m "added function $fName"
git push