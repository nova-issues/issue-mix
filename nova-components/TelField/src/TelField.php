<?php

namespace Demo\TelField;

use Laravel\Nova\Fields\Field;

class TelField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'tel-field';
}
