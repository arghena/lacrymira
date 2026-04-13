package trivy

ignore {
    input.Type == "license"

    startswith(input.PkgName, "@img/sharp-libvips-")

    input.Name == "LGPL-3.0-or-later"
}
