<?php

namespace Demo\EmailField;

use Laravel\Nova\Fields\Field;

class EmailField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'email-field';
}
