import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import Select from 'react-select';
import './AddRecipe.scss'
import { IRecipe } from '../../types';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { RecipesService } from '../../services';
import classNames from 'classnames';
import { useState } from 'react';

const originOptions = [
  { value: 'Thai', label: 'Thai'},
  { value: 'Indian', label: 'Indian'},
  { value: 'Vietnamese', label: 'Vietnamese'}
];

const difficultyOptions = [
  { value: 1, label: 'Easy'},
  { value: 2, label: 'Medium'},
  { value: 3, label: 'Hard'}
];

const authenticityOptions = [
  { value: 'Unverified', label: 'Unverified'},
  { value: 'Verified', label: 'Verified'}
];

export const AddRecipe = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, control } = useForm<IRecipe>({
    defaultValues: {
      authenticity: authenticityOptions[0].value,
      difficulty: difficultyOptions[0].value
    }
  })

  const addRecipeHandler = useMutation((data: IRecipe) => {
    return RecipesService.addRecipe(data)
  }, {
    onSuccess:() => navigate('/')
  })

  const onSubmit: SubmitHandler<IRecipe> = (data) => {
    addRecipeHandler.mutate(data);
  }

  const [description, setDescription] = useState('');

  return (
    <div className="add-recipe-form-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="add-recipe-form-back">
          <Link to="/" className="add-recipe-form-back-link">Add new recipe</Link>
        </div>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Name</div>
            <input className="add-recipe-form-input" {...register('name', { required: true })} />
          </div>
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Origin</div>
            <Controller
              control={control}
              name="origin"
              rules={{ required: true }}
              render={({ field: { onChange, value, ref }}) => (
                <Select
                  isSearchable={false}
                  ref={ref}
                  options={originOptions}
                  onChange={value => onChange(value?.value)}
                  classNamePrefix="add-recipe-form-select"
                  placeholder="Country origin"
                />
              )}
            />
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field add-recipe-form-field_single">
            <div className="add-recipe-form-label">Description</div>
            <Controller
              control={control}
              name="description"
              rules={{ required: true, maxLength: 199 }}
              render={({ field: { onChange, value, ref }}) => (
                <textarea
                  placeholder="Describe your recipe..."
                  className="add-recipe-form-input add-recipe-form-input_textarea"
                  value={value}
                  maxLength={200}
                  ref={ref}
                  onChange={(e) => {
                    onChange(e.target.value)
                    setDescription(e.target.value);
                  }}
                />
              )}
            />
            <div className={classNames({
              'add-recipe-form-limit': true,
              'add-recipe-form-limit_full': description.length === 200
            })}>
              {description.length}/200 Characters
            </div>
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Difficulty</div>
            <Controller
              rules={{ required: true }}
              control={control}
              name="difficulty"
              render={({ field: { onChange, value, ref }}) => (
                <Select
                  isSearchable={false}
                  ref={ref}
                  onChange={value => onChange(value?.value)}
                  classNamePrefix="add-recipe-form-select"
                  options={difficultyOptions}
                  defaultValue={difficultyOptions[0]}
                />
              )}
            />
          </div>

          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Protein</div>
            <input className="add-recipe-form-input" {...register('protein', { required: true })} />
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Produce</div>
            <input className="add-recipe-form-input" {...register('produce', { required: true })} />
          </div>

          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Spice</div>
            <input className="add-recipe-form-input" {...register('spice', { required: true })} />
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Cooking Oil?</div>
            <input className="add-recipe-form-input" {...register('cookingOil', { required: true })} />
          </div>

          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Volume</div>
            <input
              type="number"
              className="add-recipe-form-input add-recipe-form-input_volume"
              {...register('volume', { required: true, min: 1 })}
            />
            <span className="add-recipe-form-in-label">grams</span>
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Serves</div>
            <input
              type="number"
              className="add-recipe-form-input add-recipe-form-input_serves"
              {...register('serves', { required: true, min: 1 })}
            />
            <span className="add-recipe-form-in-label">people</span>
          </div>

          <div className="add-recipe-form-field">
            <div className="add-recipe-form-label">Authenticity</div>
            <Controller
              rules={{ required: true }}
              control={control}
              name="authenticity"
              render={({ field: { onChange, value, ref }}) => (
                <Select
                  isSearchable={false}
                  ref={ref}
                  onChange={value => onChange(value?.value)}
                  options={authenticityOptions}
                  defaultValue={authenticityOptions[0]}
                  classNamePrefix="add-recipe-form-select"
                />
              )}
            />
          </div>
        </fieldset>

        <fieldset className="add-recipe-form-fieldset">
          <div className="add-recipe-form-field add-recipe-form-field_single">
            <div className="add-recipe-form-label">Stock</div>
            <input className="add-recipe-form-input" {...register('stock', { required: true })} />
          </div>
        </fieldset>

        <button type="submit"
          disabled={addRecipeHandler.isLoading}
          className={classNames({
          'add-recipe-form-submit': true,
          'add-recipe-form-submit_loading': addRecipeHandler.isLoading
        })}>
          {addRecipeHandler.isLoading ? '' : 'Add Recipe'}
        </button>
      </form>
    </div>
  )
}
