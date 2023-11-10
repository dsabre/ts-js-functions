#!/bin/bash

fName=$1

if [ -z "$fName" ]; then
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
fi

fPath="src/views/functions/${fName}.vue"

# Check if the file exists
if [ -e "$fPath" ]; then
    echo "Function $fPath already exists."
    exit 1
fi

# Prompt user for function description
temp_file_ds1=$(mktemp)
temp_file_ds2=$(mktemp)
echo "Enter function description (press Ctrl+D to finish):"
cat > "$temp_file_ds1"
sed -i 's/$/<br>/g' "$temp_file_ds1"
tr -d '\n' < "$temp_file_ds1" > "$temp_file_ds2"
sed 's/.\{4\}$//' "$temp_file_ds2" > "$temp_file_ds1"

temp_file_ts=$(mktemp)
echo "Enter TypeScript code (press Ctrl+D to finish):"
cat > "$temp_file_ts"

temp_file_js=$(mktemp)
echo "Enter JavaScript code (press Ctrl+D to finish):"
cat > "$temp_file_js"

temp_file_ex=$(mktemp)
echo "Enter example code (press Ctrl+D to finish):"
cat > "$temp_file_ex"

echo
echo "Starting file generation..."
echo

# create function file
pnpm gen-func --name="$fName" || exit $?

# replace function infos in page
temp_file=$(mktemp)
templ=$(<$fPath)
value=$(<$temp_file_ds1)
echo "${templ//__DESCRIPTION__/$value}" > "$temp_file"
cat "$temp_file" > "$fPath"
rm -f "$temp_file"

temp_file=$(mktemp)
templ=$(<$fPath)
value=$(<$temp_file_ts)
echo "${templ//__TYPESCRIPT_CODE__/$value}" > "$temp_file"
cat "$temp_file" > "$fPath"
rm -f "$temp_file"

temp_file=$(mktemp)
templ=$(<$fPath)
value=$(<$temp_file_js)
echo "${templ//__JAVASCRIPT_CODE__/$value}" > "$temp_file"
cat "$temp_file" > "$fPath"
rm -f "$temp_file"

temp_file=$(mktemp)
templ=$(<$fPath)
value=$(<$temp_file_ex)
echo "${templ//__EXAMPLE_CODE__/$value}" > "$temp_file"
cat "$temp_file" > "$fPath"
rm -f "$temp_file"

# format file
pnpm exec prettier "$fPath" --write

# delete temporary files
rm -f "$temp_file_ds1" "$temp_file_ds2" "$temp_file_ts" "$temp_file_js" "$temp_file_ex"

# add route for this function
sed -i "s/\/\/ NEW ROUTES ABOVE THIS LINE (DO NOT REMOVE THIS COMMENT)/addRoute('${fName}');\n\/\/ NEW ROUTES ABOVE THIS LINE (DO NOT REMOVE THIS COMMENT)/g" "src/router/index.js"

# add file to git
git add "$fPath" "src/router/index.js"
git commit -m "added function $fName"
git push
